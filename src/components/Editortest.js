import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, convertToRaw} from 'draft-js';
// import 'draft-js/dist/Draft.css';
import '../../node_modules/draft-js/dist/Draft.css'
import './draft.css'


export const Editortest = () => {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  return (
    <>
      <Editor editorState={editorState} onChange={setEditorState} />

      {/* {console.log('content state', editorState)} */}
      {console.log(convertToRaw(editorState.getCurrentContent()))}
    </>
    )
}
