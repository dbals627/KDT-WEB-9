import { useState } from "react";

export default function BoardFunc() {

    const [inputWriter, setInputWriter] = useState('')
    const [inputTitle, setInputTitle] = useState('')
    const [comments, setComments] = useState([])

    const onChange = (e) => {
        setInputWriter(() => e.target.value);
    }

    const addComment = () => {
        const newComment = {
            writer: inputWriter,
            title: inputTitle
        }
    }


    return (
        <div>

            <form>
                <label htmlFor="writer">작성자:</label>
                <input id="writer" type="text" value={inputWriter} onChange={(e) => onChange(e)} />

                <label htmlFor="title">제목:</label>
                <input id="title" type="text" value={inputTitle} onChange={(e) => setinputTitle(e.target.value)} />

                <button type="button" onClick={addComment}>작성</button>
            </form>

            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.comments.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
}