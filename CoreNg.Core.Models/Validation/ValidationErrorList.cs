using System.Collections.Generic;
using System.Linq;

namespace CoreNg.Core.Models.Validation
{
    public class ValidationErrorList
    {
        public IList<ValidationError> Errors { get { return _errors; } }
        private IList<ValidationError> _errors = new List<ValidationError>();

        public bool isValid
        {
            get
            {
                return !_errors.Any();
            }
        }

        public void AddError(string control, string errorKey)
        {
            control = control.ToLower().Trim();
            var error = _errors.SingleOrDefault(e => e.Control == control);
            if (error == null)
            {
                _errors.Add(new ValidationError(control, new List<string> { errorKey }));
            }
            else
            {
                error.ErrorKeys.Add(errorKey);
            }
        }
    }
}
