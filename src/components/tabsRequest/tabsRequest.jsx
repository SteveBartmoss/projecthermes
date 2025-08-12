

export function TabsRequest(){

    const elements = [
        {
            id: 1,
            title: 'Params',
            content: 'Params',
        },
        {
            id: 2,
            title: 'Authorization',
            content: 'Authorization',
        },
        {
            id: 3,
            title: 'Body',
            content: 'Body',
        }
    ]

    return(
        <div>
            <div>
                {
                    elements.map(element => 
                        <div>
                            <p>{element.title}</p>
                        </div>
                    )
                }
            </div>
            <div>
                
            </div>
        </div>
    )
}