
interface Props extends React.HTMLAttributes<Element> {
    title?: string;
    description?: string;
    image: string;

}
export default function HomeCard({ title, description, image, }: Props) {

    return (
        <div className="home-card">
            <div className="home-card-header">
                <img src={image} alt="" />
                <h1 className="home-card-header-title">{title}</h1>
                <p className="home-card-header-subtitle">{description}</p>

            </div>

        </div>
    );
}
