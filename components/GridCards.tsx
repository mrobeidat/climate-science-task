interface Props extends React.HTMLAttributes<Element> {
    title: string;
    logo: string;
    text: string;
    tag?: string,
    text2?: string,
    text3?: string,
    text4?: string,
    text5?: string,
    text6?: string,
    list?: string,
}
export default function GridCard({ logo, title, text, tag, text2, text3, text4, text5, text6, list }: Props) {
    const Tags: string[] = []
    tag?.split(',').map((item: string) => Tags.push(item))
    const List: string[] = []
    list?.split(',').map((item: string) => List.push(item))
    return (
        <div className="card">
            <div className="midCard">
                <div className="midCard__content">
                    <h1>{title}</h1>
                    <hr />
                    <p>{text}</p>
                    {Tags?.map((tag,i) => (<div key={i}  className="hero__tag">{tag}</div>))}
                    <p >{text2}</p>
                    <p >{text3}</p>
                    <p >{text4}</p>
                    <p >{text5}</p>

                    {list && < ul >
                        {List?.map((item,i) => (<li key={i} className="midCard__content__list">{item}</li>))}
                    </ul>}
                    <p >{text6}</p>

                </div>
            </div >

            <img src={logo} alt="mid card" />
        </div>
    );
}