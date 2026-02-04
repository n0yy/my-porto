import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') || 'Danang Hapis Fadillah'

    return new ImageResponse(
        (
            <div
        style= {{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#030712', // gray-950
        backgroundImage: 'radial-gradient(circle at 25% 25%, #1e3a8a 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1e40af 0%, transparent 50%)',
    }}
      >
    <div
          style={
    {
        display: 'flex',
            flexDirection: 'column',
                alignItems: 'center',
                    justifyContent: 'center',
                        padding: '40px',
                            borderRadius: '24px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                        backdropFilter: 'blur(10px)',
          }
}
        >
    <div style={ { fontSize: 32, fontWeight: 'bold', color: '#3b82f6', marginBottom: 20 } }>
        DH.Portfolio
        </div>
        < div
style = {{
    fontSize: 64,
        fontWeight: 800,
            color: 'white',
                textAlign: 'center',
                    maxWidth: '800px',
                        lineHeight: 1.2,
            }}
          >
    { title }
    </div>
    < div style = {{ fontSize: 24, color: '#9ca3af', marginTop: 30 }}>
        AI Engineer | Machine Learning | Web Development
            </div>
            </div>
            </div>
    ),
{
    width: 1200,
        height: 630,
    }
  )
}
