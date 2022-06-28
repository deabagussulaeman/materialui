import Link from 'next/link'

export default function Footer() {
  return (
    <div>
        <style jsx>{`
            .footer {
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: #3F51B5;
                color: white;
                text-align: center;
            }
        `}</style>

        <div className="footer">
            <p>Training MUI - Dea Bagus Sulaeman</p>
        </div>
    </div>
  )
}