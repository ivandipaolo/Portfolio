import { StyledTimeline } from "./StyledTimeline"
import { items } from "./statements"

export const Timeline = () => {
    return (
        <StyledTimeline>
            <h1>PRESENT</h1>
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