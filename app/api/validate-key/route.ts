import { NextRequest, NextResponse } from 'next/server';

interface ValidateKeyRequest {
  api_key: string;
}

interface AnthropicErrorResponse {
  error?: {
    message: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    const { api_key } = await request.json() as ValidateKeyRequest;

    if (!api_key) {
      return NextResponse.json(
        { error: 'API key is required' },
        { status: 400 }
      );
    }

    // Make a test request to Anthropic API to validate the key
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${api_key}`,
        'anthropic-version': '2024-01-01'
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'Hello' }],
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({} as AnthropicErrorResponse));
      console.error('Anthropic API Error:', errorData);
      return NextResponse.json(
        { error: errorData.error?.message || 'Invalid API key' },
        { status: 401 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error validating API key:', error);
    return NextResponse.json(
      { error: 'Failed to validate API key' },
      { status: 500 }
    );
  }
} 