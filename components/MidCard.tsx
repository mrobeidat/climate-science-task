
    interface Props extends React.HTMLAttributes<Element> {
        title?: string;
        logo?: string;
        text?: string;
       
    }
    export default function MidCard({logo,title,text }: Props) {

    return (
        <div className="midCard">
        <div className="midCard__content">
            <div className="midCard__content__title">
                <img src={logo} alt="mid card" />
            <h1>{title}</h1>
            </div>

            <div className="midCard__content__text">
            <p>{text}</p>
            </div>
            <div className="midCard__content__button">
            </div>
        </div>
        </div>
    );
    }