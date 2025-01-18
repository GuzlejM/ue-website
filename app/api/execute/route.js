import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { instruction, api_key } = await request.json();

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
        messages: [{ role: 'user', content: instruction }],
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1024,
        system: "You are a helpful AI assistant that can control the user's computer. You can execute commands and provide feedback."
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Anthropic API Error:', errorData);
      throw new Error(errorData.error?.message || 'Failed to get response from Anthropic API');
    }

    const data = await response.json();
    
    // Process the response and extract relevant information
    const message = data.content[0].text;
    const tool_outputs = []; // You'll need to implement tool execution logic here

    return NextResponse.json({
      message,
      tool_outputs
    });
  } catch (error) {
    console.error('Error executing command:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to execute command' },
      { status: 500 }
    );
  }
} 