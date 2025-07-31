import { VariableInJsx } from "./VariableInJsx"
import{ ConditionInJsx } from "./ConditionInJsx"

function App() {
    return (
        <div>
            {/* inside curly braces we write javascript expressions */}
            <p>result = { 2+ 6} </p>
        <VariableInJsx />
        <ConditionInJsx />
        </div>
    )
}

export { App }