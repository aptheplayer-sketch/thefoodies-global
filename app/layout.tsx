export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{fontFamily:'Arial',background:'#000',color:'#fff'}}>
        {children}
      </body>
    </html>
  );
}