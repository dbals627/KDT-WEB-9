import { Component, useState } from 'react';

export default function BoardSearchFunc() {
    const [writer, setWriter] = useState('')
    const [title, setTitle] = useState('')
    const [comments, setComments] = useState([])
    const [search, setSearch] = ''
    const [type, SetType] = ''
    const [result, setResult] = []

    return (
        <>
            <form>
                <label htmlFor="writer">작성자:</label>
                <input id="writer" type="text" value={writer} onChange={(e) => onChange(e)} />
                <label htmlFor="title">제목:</label>
                <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setState({ title: e.target.value })}
                />
                <button type="button" onClick={addComment}>
                    작성
                </button>
            </form>
            <form>
                {/* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}
                <select value={type} onChange={(e) => setState({ type: e.target.value })}>
                    <option value="writer">작성자</option>
                    <option value="title">제목</option>
                </select>
                <input
                    type="text"
                    placeholder="검색어"
                    value={search}
                    onChange={(e) => setState({ search: e.target.value })}
                />
                <button type="button" onClick={searchComment}>
                    검색
                </button>
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
                    {comments.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h4>검색결과</h4>
            <table border={1} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{value.title}</td>
                                <td>{value.writer}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );

}
