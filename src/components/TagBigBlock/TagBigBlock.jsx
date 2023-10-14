import { Box, Link, styled } from '@mui/material';

const Tag = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0px 8px',
  whiteSpace: 'nowrap',
  borderRadius: '12px',
  backgroundColor: theme.palette.primary.lightest,
  margin: 24
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontSize: '12px',
  fontWeight: 600
}));

const TagBigBlock = ({ tag }) => {
  return (
    <Tag>
      <LinkStyled>{tag}</LinkStyled>
    </Tag>
  );
};

export default TagBigBlock;
