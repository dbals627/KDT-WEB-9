

export default Event = () => {

    const handleClick = () => {
        alert('클릭했습니다');
    };

    const handleClick2 = (e, str) => {
        console.log(e)
        alert(str)
    };


    return (
        <>
            <button onClick={handleClick}>클릭</button>
            {/* handleClick() 으로 쓰면 절대 안됨! */}
            <button onClick={(event) => handleClick2(event, "2번 클릭")}>클릭2</button>
        </>
    )
}