import './styles.css'

export type CardProps = {
    name: string
    time: string
}

export function Card(props: CardProps) {
    return (
        <div className='card'>
            <strong>{props.name}</strong>
            <strong>{props.time}</strong>
        </div>
    )
}
