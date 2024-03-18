import { useParams } from 'react-router-dom';
import Blog1 from '../Blog1/Blog1';
import Blog2 from '../Blog2/Blog2';
import Blog3 from '../Blog3/Blog3';
import Blog4 from '../Blog4/Blog4';
import Blog5 from '../Blog5/Blog5';
import Blog6 from '../Blog6/Blog6';
import Blog7 from '../Blog7/Blog7';
import Blog8 from '../Blog8/Blog8';
import Blog9 from '../blog9/Blog9';
import Blog10 from '../blog10/Blog10';
import Blog11 from '../blog11/Blog11';
import Blog12 from '../blog12/Blog12';
import Blog13 from '../blog13/Blog13';
import Blog14 from '../blog14/Blog14';




export default function BlogId() {

    const { blogId } = useParams();

    const blogComponents = {
        1: <Blog1 />,
        2: <Blog2 />,
        3: <Blog3 />,
        4: <Blog4 />,
        5: <Blog5 />,
        6: <Blog6 />,
        7: <Blog7 />,
        8: <Blog8 />,
        9: <Blog9 />,
        10: <Blog10 />,
        11: <Blog11 />,
        12: <Blog12 />,
        13: <Blog13 />,
        14: <Blog14 />,
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