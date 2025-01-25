import { NextRequest, NextResponse } from 'next/server';

interface ExecuteRequest {
  instruction: string;
  api_key: string;
}

interface AnthropicMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AnthropicResponse {
  content: Array<{
    text: string;
    type: 'text';
  }>;
}

interface AnthropicErrorResponse {
  error?: {
    message: string;
  };
}

interface ExecuteResponse {
  message: string;
  tool_outputs: any[]; // TODO: Define specific tool output types
}

export async function POST(request: NextRequest) {
  try {
    const { instruction, api_key } = await request.json() as ExecuteRequest;

    if (!instruction || !api_key) {
      return NextResponse.json(
        { error: 'Instruction and API key are required' },
        { status: 400 }
      );
    }

    // Make request to Anthropic API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`,
        'anthropic-version': '2024-01-01'
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: instruction }] as AnthropicMessage[],
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1024,
        system: "You are a helpful AI assistant that can control the user's computer. You can execute commands and provide feedback."
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({} as AnthropicErrorResponse));
      console.error('Anthropic API Error:', errorData);
      throw new Error(errorData.error?.message || 'Failed to get response from Anthropic API');
    }

    const data = await response.json() as AnthropicResponse;
    
    // Process the response and extract relevant information
    const message = data.content[0].text;
    const tool_outputs: any[] = []; // TODO: Implement tool execution logic

    return NextResponse.json({
      message,
      tool_outputs
    } as ExecuteResponse);
  } catch (error) {
    console.error('Error executing command:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to execute command' },
      { status: 500 }
    );
  }
} 