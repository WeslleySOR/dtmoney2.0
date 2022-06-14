import styled from 'styled-components';
import { transparentize } from 'polished';

interface HighlightBackgroundProps {
  value: number;
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 0px 1.5rem 4rem rgba(0, 0, 0, 0.06);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.income-box, &.outcome-box {
      background: var(--shape);
      color: var(--text-title);
    }
  }
`;

export const TotalBackground = styled.div<HighlightBackgroundProps>`
  color: #ffffff;
  background: ${({ value }) => value >= 0
    ? transparentize(0.1, colors.green)
    : transparentize(0.1, colors.red)};
`