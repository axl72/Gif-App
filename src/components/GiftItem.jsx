export const GiftItem = ({id, title, url}) => (
    <div className="card">
        <img src={url} alt={'esto'} />
        <p>{title}</p>
    </div>
)