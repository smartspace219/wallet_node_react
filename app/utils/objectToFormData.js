/*
  Created by: ui_monkey 11/11/2020
 */
const ObjectToFormData = (obj, form, namespace) => {
    let fd = form || new FormData();
    let formKey;
    for(let property in obj) {
      if(obj.hasOwnProperty(property) && obj[property] !== null && obj[property] !== undefined) {
        if(!(obj[property] instanceof File)) {
          if (namespace) {
            formKey = `${namespace}[${property}]`;
          } else {
            formKey = property;
          }
          // if the property is an object, but not a File, use recursivity.
          if (obj[property] instanceof Date) {
            fd.append(formKey, obj[property].toISOString());
          }
          // else if (typeof obj[property] === 'object' && (obj[property] instanceof Array && obj[property].length>0) ) {
          else if (typeof obj[property] === 'object') {
            ObjectToFormData(obj[property], fd, formKey);
          } else { // if it's a string or a File object
            fd.append(formKey, obj[property]);
          }
        }
      }
    }
    return fd;
  };
  
  export default ObjectToFormData;
  