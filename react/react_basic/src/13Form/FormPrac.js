import { useForm } from 'react-hook-form';

export default function FormPrac() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handleSubmit: 두개의 함수를 받는데 하나는 유효할때 실행되는 함수(필수), 하나는 유효하지 않을때 실행되는 함수(선택)

  const onValid = (data) => {
    console.log('onValid', data);
  };

  // const onInvalid = (err) => {
  //     console.log('onInValid', err)
  // }

  console.log('errors', errors);
  // console.log('watch', watch('username'));

  return (
    <>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type='text'
          {...register('username', {
            required: '이름은 필수 항목입니다',
          })}
          placeholder='name'
        />
        {errors.username?.message}
        <br />

        {/* username?이 있는지 없는지 */}
        {/* {type: 'required', message: '이름을 입력하세요', ref: input}*/}
        <input
          type='text'
          {...register('userage', {
            required: true,
            // validate: 직접 오류를 만드는것
            validate: {
              numberValidate: (v) =>
                v >= 0 || '0 이상의 숫자만 입력 가능합니다.',
            },
          })}
          placeholder='userage'
        />
        {errors.userage?.message}

        <br />
        <button>제출</button>
      </form>
    </>
  );
}

// export default function PracticeForm () {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         watch,
//       } = useForm();

//     const valid = (data) => {
//         console.log('valid', data);
//       };

//     return (
//         <div>
//           <form onSubmit={handleSubmit(valid)}>
//             <input
//               type='text'
//               placeholder='name'
//               // ref기 때문에 에러났을때 focus도 같이 잡아준다
//               {…register('name', {
//                 required: '이름은 필수 항목입니다',
//               })}
//             />
//             {errors.name?.message}
//             <br />
//             <input
//               type='text'
//               placeholder='age'
//               {…register('age', {
//                 required: true,
//                 // validate: 직접 오류를 만드는것
//                 validate: {
//                     numberValidate: (v) => v >= 0 || '0 이상의 숫자만 입력 가능합니다.'
//                 },
//              })}
//             />
//             {errors.age?.message}
//             <br />
//             <button>Submit</button>
//           </form>
//         </div>
//       );
// }
