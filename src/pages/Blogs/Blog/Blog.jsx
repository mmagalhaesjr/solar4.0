import { useParams } from 'react-router-dom';
import Blog1 from '../Blog1/Blog1';
import Blog2 from '../Blog2/Blog2';
import Blog3 from '../Blog3/Blog3';
import Blog4 from '../Blog4/Blog4';
import Blog5 from '../Blog5/Blog5';
import Blog6 from '../Blog6/Blog6';
import Blog7 from '../Blog7/Blog7';




export default function Blog() {

    const { blogId } = useParams();

    const blogComponents = {
        1: <Blog1 />,
        2: <Blog2 />,
        3: <Blog3 />,
        4: <Blog4 />,
        5: <Blog5 />,
        6: <Blog6 />,
        7: <Blog7 />,
    };

    const selectedBlog = blogComponents[blogId];

    return (
        <>
            <div>
                {selectedBlog || <p>Blog não encontrado</p>}
            </div>
        </>
    )
}