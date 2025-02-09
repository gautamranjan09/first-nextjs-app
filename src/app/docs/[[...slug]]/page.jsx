
const Docs = ({params}) => {
    const {slug} = params;
    console.log(slug);

    if(slug?.length === 2) {
        return <h1> viewing docs for featue {slug[0]} and concept {slug[1]}</h1>
    }
    else if(slug?.length === 1) {
        return <h1> viewing docs for feature {slug[0]}</h1>
    }
    else {
        return <h1> viewing all docs</h1>
    }
}

export default Docs;