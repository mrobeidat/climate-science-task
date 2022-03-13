import Link from 'next/link'
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
    const Tesxts: string[] = []
    text2?.split(',').map((item: string) => Tesxts.push(item))
    return (
        <div className="section-3">
            <div></div>
            <div className="section-3-p1">
                <img
                data-aos="zoom-in-down"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
                data-aos-anchor-placement="top-center"
                src={logo} alt="gridsCardImage" />
            </div>
            <div className="section-3-p1">

                <h1>{title}</h1>
                <hr />

                <p className='time' >{text}</p>
                <div className='tg'>

                    {Tags?.map((tag, i) => (<div key={i} className="heroTag">{tag}</div>))}
                </div>
                {Tesxts?.map((text, i) => (<p key={i} >{text}</p>))}
                {list && < ul >
                    {List?.map((item, i) => (<><Link href='/'><li key={i} >{item}</li></Link> </>))}
                </ul>}
                <p >{text6}</p>
            </div>
            <div></div>
        </div>
    );
}