import { MdOutlineArrowRightAlt } from 'react-icons/md';
function Button() {
    return (
        <a href="https://elysiland.gitbook.io/">
            <button
                className="flex items-center bg-white px-[30px] gap-3 h-[54px] text-2xl font-praebrg font-medium relative group"
                style={{
                    boxShadow: '4px 4px #c39e53'
                }}
            >
                <span className="duration-200 mr-[-20px] group-hover:mr-0" >Learn More</span>
                <span className="duration-200 ml-[-10px] group-hover:ml-0 opacity-0 group-hover:opacity-100" >
                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" style={{ width: 21, height: 12 }} viewBox="0 0 21 10"><path d="M21.000,5.000 L15.000,10.000 L15.000,6.000 L-0.000,6.000 L-0.000,4.000 L15.000,4.000 L15.000,0.000 L21.000,5.000 Z"></path></svg>
                </span>
            </button>
        </a>
    )
}

export default Button
