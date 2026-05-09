import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#4f46e5',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
          position: 'relative',
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: '900',
            fontFamily: 'sans-serif',
          }}
        >
          M
        </div>
        <div 
          style={{
            position: 'absolute',
            top: '4px',
            right: '4px',
            width: '6px',
            height: '6px',
            background: '#22d3ee',
            borderRadius: '50%',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
