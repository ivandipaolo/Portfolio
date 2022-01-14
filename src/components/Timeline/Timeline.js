import { StyledTimeline } from "./StyledTimeline"
import { items } from "./statements"

export const Timeline = () => {
    const today = new Date();
    let month = today.toLocaleString('default', { month: 'short' })
    let day = today.getUTCDate();
    let year = today.getUTCFullYear();
    const newdate = day + "/" + month + "/" + year;
    return (
        <StyledTimeline>
            <h1>{newdate}</h1>
            <div className="timeline">
                <div id='vertical-line' />
                <ul>
                    {
                        items.map((item) => (
                            <li key={item.id}>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <div className="time">
                                    <h4>{item.date}</h4>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <h1>2019</h1>
        </StyledTimeline>
    )
}