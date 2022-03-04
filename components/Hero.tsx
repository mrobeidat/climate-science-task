interface HeroProps extends React.HTMLAttributes<Element> {
    tag?: string,
    img?: string,
    title?: string,
    subtitle?: string,
    button?: string,
    text?: string,
}
export default function Hero({ tag, img, title, subtitle, button, text }: HeroProps): any {
    const Tags: string[] = []
    tag?.split(',').map((item: string) => Tags.push(item))
    const Subtitle: string[] = []
    subtitle?.split(',').map((item: string) => Subtitle.push(item))
    return (
        <section className="hero">
            <img className="Global-img" src={img} alt="Hero " />
            <div className="divTags" >
                {Tags?.map((tag, i) => (<div key={i} className="hero__tag">{tag}</div>))}
            </div>
            <h1 className="hero__title">{title}</h1>
        
            <button className="hero__button">{button}</button>
            <div className="divSubs" >

            {Subtitle?.map((subtitle, i) => (<p key={i} className="hero__subtitle">{subtitle}</p>))}
            </div>
            <p className="hero__text">{text}</p>

        </section>
    )

}