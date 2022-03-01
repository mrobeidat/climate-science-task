interface HeroProps extends React.HTMLAttributes<Element> {
    tag?: string,
    img?: string
    title?: string,
    subtitle?: string,
    button?: string,
text? : string
}
export default function Hero({ tag, img, title, subtitle, button, text }: HeroProps): any {
    const Tags: string[] = []
    tag?.split(',').map((item: string) => Tags.push(item))
    const Subtitle: string[] = []
    subtitle?.split(',').map((item: string) => Subtitle.push(item))
    return (
        <section className="hero">
            <img src={img} alt="Hero " />
            {Tags?.map((tag, i) => (<div key={i} className="hero__tag">{tag}</div>))}


            <div className="hero__content">
                <h1 className="hero__title">{title}</h1>
                {Subtitle?.map((tag,i) => (<p key={i} className="hero__tag">{tag}</p>))}

                <div className="hero__button">
                    <button className="btn btn--primary">{button}</button>
                </div>
                <p className="hero__text">{text}</p>
            </div>

        </section>
    )

}