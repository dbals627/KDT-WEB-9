import { useState } from 'react'

export default function ToggleFunc() {

    const [status, setStatus] = useState(false)
    // 0인덱스 바꾸고 싶은 값, 1인덱스 바꾸는 값, 초기값

    const handleToggle = () => {
        if (status === false) {
            setStatus(true)
        } else {
            setStatus(false)
        }
    }

    return (
        < div >
            <button onClick={handleToggle}>토글</button>
            <p>{status && '보여라'}</p>
            {/* 초기값 false이기 때문에 안보이고 true 면 보이게 됨 */}
        </div >
    )

}