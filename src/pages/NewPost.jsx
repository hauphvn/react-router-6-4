import { useState } from 'react';
import { redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import NewPostForm from '../components/NewPostForm';
import { savePost } from '../util/api';

function NewPostPage() {
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [error, setError] = useState();
  const navigate = useNavigate();
const navigation = useNavigation();
  // async function submitHandler(event) {
  //   event.preventDefault();
  //   setIsSubmitting(true);
  //   try {
  //     const formData = new FormData(event.target);
  //     const post = {
  //       title: formData.get('title'),
  //       body: formData.get('post-text'),
  //     };
  //     await savePost(post);
  //     navigate('/');
  //   } catch (err) {
  //     setError(err);
  //   }
  //   setIsSubmitting(false);
  // }
const data = useActionData();
  function cancelHandler() {
    navigate('/blog');
  }

  return (
    <>
      {/*{error && <p>{error.message}</p>}*/}
      {data && data.isError && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === 'submitting'}
      />
    </>
  );
}

export default NewPostPage;
export async function action({request}){
  const data = await request.formData();
  const validationError = await savePost(data);
  if(validationError){
    return validationError;
  }
  return redirect('/blog');
}
