import React, {useEffect} from 'react'

const Content = props => {

    useEffect(() => {
        props.getCharacters(props.currentPage)
    },[props.currentPage])
    useEffect(() => {
        props.getAllCharacters()
    }, [])

    if(!props.isCurrentCharacter) {
        const pages = []
        for(let i = 1; i <= props.totalPage; i++){
            if(i === props.currentPage)
                pages.push(<button className="btn btn-success mr-2">{i}</button>)
            else pages.push(<button className="btn btn-primary mr-2" onClick={() => props.setCurrentPage(i)}>{i}</button>)
        }

        let filtered = !!(props.searchText || props.speciesFilter || props.statusFilter)

        return (
            <div className="mt-5 ml-2 mr-2 d-flex flex-column align-items-center">
                {
                    !filtered ? <div className="d-flex align-items-center mb-5">{pages}</div> : ''
                }
                <div className="d-flex flex-wrap justify-content-center">
                    {props.characters}
                </div>
            </div>
        )
    }

    return (
        <div className="mt-5 ml-2 mr-2 d-flex flex-column align-items-center">
            Person
        </div>
    )

}

export default Content