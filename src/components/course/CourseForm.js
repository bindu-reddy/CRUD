import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm =({course, allAuthors, onSave, onChange, loading, errors})=>{
    return (
        <form>
            <TextInput 
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                errors={errors.title}/>
        
            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select author"
                options={allAuthors}
                onChange={onChange}
                errors={errors.authorId}/>
        
            <TextInput 
                name="category"
                label="Category"
                value={course.category}
                onChange={onChange}
                errors={errors.category}/>
        
            <TextInput 
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                errors={errors.length}/>
        
            <input 
                type="submit"
                disable={loading}
                value={loading?'Saving..':'Save'}
                className="btn btn-primary"
                onclick={onSave}/>
        
        </form>
    );
};

CourseForm.protoTypes={
    course: PropTypes.object.isRequired,
    allAuthors:PropTypes.array,
    onSave:PropTypes.func.isRequired,
    onChange:PropTypes.func.isRequired,
    loading:PropTypes.bool,
    errors:PropTypes.object
};

export default CourseForm;