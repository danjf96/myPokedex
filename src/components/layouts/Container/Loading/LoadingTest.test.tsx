import 'react-native';
import { render, screen } from '@testing-library/react-native';
import 'jest-styled-components'
import Loading from '.';


describe('Loading Test', () => {

    test('Visible Loading', () => {
        render(<Loading visible={true} />);

        expect(screen.root.type).toBe('ActivityIndicator')

    });

    test('Not visible Loading', () => {
        const { toJSON }  = render(<Loading visible={false} />);

        expect(toJSON()).toBeNull()

    });
})
