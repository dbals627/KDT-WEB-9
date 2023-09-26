import styled from 'styled-components';

export default function StyledComponentPrac() {

    const _Text = styled.input`
    `

    const _Btn = styled.button`
     background-color: skyblue;
     border: none;
    `

    return (
        <div>
            <_Text />
            <_Btn>Add</_Btn>
        </div>
    )
}
