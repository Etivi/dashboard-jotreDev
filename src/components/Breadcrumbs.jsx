import PropTypes from 'prop-types';
import { Link, useNavigate } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

export const Breadcrumbs = ({pagina, title}) => {

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between mb-2 md:mb-5 gap-2">
            <div>
                <h1 className="text-lg font-bold">{pagina}</h1>
                <div className="text-xs text-gray-400">
                    <Link to="#" onClick={() => navigate(-1)} className="hover:text-primary transition-colors">Atras</Link>
                    <span> - </span>
                    <span>{title}</span>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-secondary-100/50 hover:bg-secondary-100 hover:text-primary rounded-lg text-xs transition-colors"><FaFilter />Filter</button>
                <button className="flex items-center gap-2 px-4 py-2 font-bold text-secondary-900 bg-primary/90 hover:bg-primary rounded-lg text-xs transition-colors">Create</button>
            </div>
        </div>
    )
}

Breadcrumbs.propTypes = {
    title: PropTypes.string.isRequired,
    pagina: PropTypes.string.isRequired
};