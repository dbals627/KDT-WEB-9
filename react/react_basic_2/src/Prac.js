import { Component } from 'react'

class prac extends Component {

    render() {
        return (
            <div>
                작성자 : <input></input>
                제목 : <input></input>
                <button>작성</button>

                <br></br>
                <br></br>

                <select>
                    <option>번호</option>
                    <option>제목</option>
                    <option>작성자</option>
                </select>

                <input></input>
                <button>검색</button>

                <br></br>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                </table>

            </div >
        )
    }
}

export default prac;