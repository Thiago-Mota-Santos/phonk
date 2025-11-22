import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            fontSize: 32,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              color: 'white',
              padding: '40px',
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <h1
              style={{
                fontSize: '64px',
                fontWeight: 'bold',
                margin: '0 0 20px 0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Ritmo Que Balança
            </h1>
            <p
              style={{
                fontSize: '28px',
                margin: '0',
                maxWidth: '600px',
                lineHeight: '1.4',
                opacity: '0.9',
              }}
            >
              Sinta o poder do Plonk: batidas modificadas misturadas com o melhor do funk brasileiro. Uma experiência sonora única.
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
