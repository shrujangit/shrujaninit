export default function Tab({ children, ButtonContainer = "menu"}) {
    return (
        <ButtonContainer>{children}</ButtonContainer>  
    );
}