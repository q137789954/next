import http from '../../utils/http';


const { get } = http.create('epal');

export const getData = async () => {
  return get('/todos/1', {
    headers: {
        Authorization: 'newtiken'
    }
  })
}