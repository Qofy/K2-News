export default function NewsdetailLayout({ children, modal }) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}