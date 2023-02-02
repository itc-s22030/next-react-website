import {parseISO, format} from 'date-fns'
import ja from 'date-fns/locale/ja'

const ConvertDate = ({dateISO}) => {
    return(
        <time dateTime={dateISO}>
            {format(parseISO(dateISO), 'yyyy年 MM月 dd日', {locale:ja, })}
        </time>
    )
}

export default ConvertDate