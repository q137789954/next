"use client";
interface props {
    title?: string
}

const Title = ({title}: props) => {

    console.log('看看我在哪');

    return (
        <div className="text-slate-600 text-small">
            {title}
        </div>
    )
}

export default Title;