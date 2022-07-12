export default function ColorByRate(rate) {
    switch (true) {
        case rate <= 5:
            return 'red'
        case rate > 5 && rate < 7:
            return 'orange'
        case rate > 7:
            return 'green'
    }
}