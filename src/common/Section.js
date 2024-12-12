export default function Section({children, header, ...props}) {
    return(
        <>
            <section {...props}>
                <h2>{header}</h2> 
            </section>
            {children}
        </> 
    );
}