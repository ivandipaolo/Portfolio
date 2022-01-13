import { StyledTimeline } from "./StyledTimeline"

export const Timeline = () => {

    const items = [
        {
            title: 'Title 1',
            description: 'Desc 1',
            date: '1 March 1990',
            id: 1
        },
        {
            title: 'Title 2',
            description: 'Desc 1',
            date: '1 March 1990',
            id: 2
        },
        {
            title: 'Title 3',
            description: 'Desc 1',
            date: '1 March 1990',
            id: 3
        },
    ]

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
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                                </div>
                                <div className="time">
                                    <h4>January<br />2018</h4>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <h1>My adventure</h1>
        </StyledTimeline>
    )
}