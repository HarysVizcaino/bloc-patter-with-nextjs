import UC from '@usecases'
import { useObservable } from 'rxjs-hooks'


const BlankPage = () => {
  const { data } = useObservable(UC.BlankService.getSubject) || UC.BlankService.getCurrentState()
    console.log({ data })
    return (
        <div>
        <h1>BLANK PAGE</h1>
        <button 
        onClick={
            () => {
                UC.BlankService.create({ name: 'Harys', nickname: 'Vizcaino', age: 0 })
            }
        }
        >CREATE</button>
        </div>
    )
}

export default BlankPage;
