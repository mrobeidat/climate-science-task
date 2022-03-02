interface Props extends React.HTMLAttributes<Element> {
    
    Partnerlogo: string;

}
export default function Partnerlogo({ Partnerlogo}: Props) {

    return (
        <div className="partner-logo">
            <div className="partner-logo-header">
                <img src={Partnerlogo} alt="" />
            </div>

        </div>
    );
}
