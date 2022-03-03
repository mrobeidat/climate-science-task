
interface Props extends React.HTMLAttributes<Element> {
    title?: string;
    description?: string;
    image: string;

}
export default function HomeCard({ title, description, image, }: Props) {

    return (
        <div className="home-card">
            <div className="home-card-header">
                <img className="girls-img" src={image} alt="" />
                <h2 className="home-card-header-title">{title}</h2>
                <p className="home-card-header-subtitle">{description}</p>

            </div>

        </div>
    );
}
