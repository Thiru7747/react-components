
export function Buttons() {

    function showAlert() {
        alert('hello this is ALERT')
    }
    return (
        <button onClick={showAlert}>
            click me
        </button>
  
    )
}