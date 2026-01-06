export default function WrapperCss({children, style, color}) {
    return (
        <div style={{color:color, border:'2px solid black', width:'100%', padding:'10px', margin:'10px', ...style}}>
            {children}
        </div>
    )
}